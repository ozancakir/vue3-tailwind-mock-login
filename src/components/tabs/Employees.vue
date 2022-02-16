<template>
  <div class="flex flex-1 flex-wrap space-x-8 ">
    <div class="responsive-section">
      <BasicCard header="working on">
        <SummaryTile
          class="bottom-minimal-border p-5"
          v-for="(item, i) in working"
          :key="i"
          :item="item"
        ></SummaryTile>
      </BasicCard>
      <BasicCard>
        <SummaryTile
          class="bottom-minimal-border p-5"
          v-for="(item, i) in working"
          :key="i"
          :item="item"
        ></SummaryTile>
      </BasicCard>
    </div>
    <div class="responsive-section">
      <BasicCard header="watching">
        <div
          class="bottom-minimal-border py-5 px-8 "
          v-for="(item, i) in watching"
          :key="i"
        >
          <SummaryTile icon="user" dont-color :item="item"></SummaryTile>
          <p class="py-2 text-text-primary-light text-sm">{{ item.description }}</p>
          <div>
            <BasicButton :key="action" :reverse="j%2!=0" v-for="(action,j) in item.actions" :label="`${action} projects`"></BasicButton>
          </div>
        </div>
      </BasicCard>
      <BasicCard class="p-5 px-8" v-for="(item,i) in middleExtras" :key="i">

      <PointedTile  :item="item"></PointedTile>
            <BasicButton :key="action" :reverse="j%2!=0" v-for="(action,j) in item.actions" :label="`${action} projects`"></BasicButton>

      </BasicCard>
    </div>
    <div class="responsive-section"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BasicCard from '../cards/BasicCard.vue'
import SummaryTile from '../cards/SummaryTile.vue'
import BasicButton from '../BasicButton.vue'
import PointedTile from '../cards/PointedTile.vue'

export default defineComponent({
  setup () {
    return {}
  },
  data () {
    return {
      working: [
        {
          prepend: 'scrum-test-2',
          title: 'USER STORY New',
          type: 'scrum',
          tags: [
            {
              number: 1,
              type: 'ticket'
            }
          ]
        },
        {
          prepend: 'kanban-test',
          title: 'USER STORY',
          type: 'kanban',
          tags: [
            {
              number: 1,
              type: 'story'
            }
          ],
          subtitle: 'Ready for test'
        }
      ],

      watching: [
        {
          prepend: 'kanban-test',
          title: 'USER STORY',
          type: 'kanban',
          tags: [
            {
              number: 1,
              type: 'story'
            }
          ],
          actions: ['manage', 'edit'],
          subtitle: 'Ready for test',
          description: `Copy
In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available`
        }
      ],

      leftExtras: [
        {
          title: 'scrum-test',
          description: 'testing',
          type: 'scrum',
          evaluation: {
            like: 0,
            watch: 1,
            contributors: 1
          }
        }
      ],
      rightExtras: [
        {
          title: 'scrum-test-2',
          description: 'blah',
          type: 'scrum',
          evaluation: {
            like: 0,
            watch: 1,
            contributors: 1
          }
        }
      ],
      middleExtras: [
        {
          title: 'kanban-test',
          type: 'kanban',
          subtitle: 'Description line here',
          actions: ['manage']

        }
      ]

    }
  },
  components: { BasicCard, SummaryTile, BasicButton, PointedTile }
})
</script>

<style scoped>
.responsive-section {
  @apply md:w-1/3 w-1/2 py-2 flex flex-col justify-between space-y-5;
}
</style>
