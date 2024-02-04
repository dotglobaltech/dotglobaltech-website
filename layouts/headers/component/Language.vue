<template>
  <div class="header__info">
    <ul>
      <li>
        <span>
          <span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 8C15 11.864 11.864 15 8 15C4.136 15 1 11.864 1 8C1 4.136 4.136 1 8 1C11.864 1 15 4.136 15 8Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.5969 10.226L8.42691 8.93101C8.04891 8.70701 7.74091 8.16801 7.74091 7.72701V4.85701"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          MOnday-Friday 10am-07pm
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    handleToggle() {
      this.open = !this.open
    }
  }
};
</script>