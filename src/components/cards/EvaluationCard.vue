<template>
  <BasicCard class="w-full p-5">
    <PointedTile :item="item"> </PointedTile>
    <Description :description="item.description"></Description>

    <EvaluationWidget
      v-if="item.evaluation"
      :evaluation="item.evaluation"
    ></EvaluationWidget>
  </BasicCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BasicCard from './BasicCard.vue'
import PointedTile from './PointedTile.vue'
import EvaluationWidget from './EvaluationWidget.vue'
import Description from '../cards/Description.vue'

export default defineComponent({
  setup () {
    return {}
  },
  props: ['item'],
  components: { BasicCard, PointedTile, EvaluationWidget, Description }
})
</script>

<style scoped></style>
