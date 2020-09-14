<template>
  <div class="card" :class="card.rarity">
    <div class="costs">
      <span v-for="(cost, index) in card.costs" :class="cost" :key="index"></span>
    </div>
    <div class="name">
      <div>{{ card.name }}</div>
      <div class="special" v-if="card.capacity">({{ card.capacity }})</div>
    </div>
    <img :src="card.image_uris.small" />
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
  },
}
</script>

<style>
.card {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  transition: linear 0.3s;
}

.card > img {
  display: none;
}

.card:hover {
  background: lightgrey;
}

.card:hover > img {
  display: block;
  position: absolute;
  z-index: 10;
}

.card > img.small {
  width: 200px;
}

.card .name {
  display: flex;
  align-items: center;
  justify-content: baseline;
  margin-left: 5px;
}

.card::before {
  content: '';
  border-radius: 10px;
  width: 10px;
  height: 10px;
  margin-right: 4px;
}
.card.uncommon::before {
  background-color: grey;
}
.card.common::before {
  background-color: black;
}
.card.rare::before {
  background-color: yellow;
}
.card.mythic::before {
  background-color: orangered;
}

.card .special {
  font-size: 10px;
  font-style: italic;
  margin-left: 2px;
}
</style>
