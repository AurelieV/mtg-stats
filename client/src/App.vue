<template>
  <div id="app">
    <h2>{{ extension.name }}</h2>
    <div class="tricks">
      <div class="color" v-for="color in colors" :key="color.name">
        <div>{{ color.name }}</div>
        <Card v-for="(card, index) in color.cards" :key="index" :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import extension from '@/tricks/znr.json'
import Card from '@/components/Card'

const costRegexp = new RegExp(/\{([G, W, B, U, R, \d, X, \/]+)\}/g)

export default {
  name: 'App',
  components: { Card },
  data() {
    return { extension }
  },
  computed: {
    cards() {
      return this.extension.cards.map(c => {
        const costs = []
        let cost = costRegexp.exec(c.mana_cost)
        while (cost !== null) {
          const className = `ms-${cost[1]
            .split('/')
            .join('')
            .toLowerCase()}`
          costs.push(`${className} ms ms-cost`)
          cost = costRegexp.exec(c.mana_cost)
        }
        return { ...c, costs }
      })
    },
    colors() {
      const colors = {
        W: { cards: [], name: 'W', className: 'white' },
        U: { cards: [], name: 'U', className: 'blue' },
        B: { cards: [], name: 'B', className: 'black' },
        R: { cards: [], name: 'R', className: 'red' },
        G: { cards: [], name: 'G', className: 'green' },
        multi: { cards: [], name: 'Multi', className: 'multicolore' },
        colorless: { cards: [], name: 'Colorless', className: 'multicolore' },
      }
      this.cards.forEach(card => {
        const cardColors = card.colors
        if (cardColors.length > 1) {
          colors.multi.cards.push(card)
          return
        }
        if (cardColors.length === 0) {
          colors.colorless.cards.push(card)
          return
        }
        colors[cardColors[0]].cards.push(card)
      })

      Object.keys(colors).forEach(key => {
        if (colors[key].cards.length === 0) {
          delete colors[key]
        } else {
          colors[key].cards.sort((a, b) => a.cmc - b.cmc)
        }
      })

      return colors
    },
  },
}
</script>

<style>
.tricks {
  display: flex;
}
.color {
  flex: 1;
}
</style>
