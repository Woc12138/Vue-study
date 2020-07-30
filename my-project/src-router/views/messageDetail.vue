<template>
  <ul>
    <li>id: {{ $route.params.id }}</li>
    <li>title: {{ detail.title }}</li>
    <li>content: {{ detail.content }}</li>
  </ul>
</template>

<script>
const messageDetails = [
  { id: 1, title: "Message001", content: "message content00111...." },
  { id: 3, title: "Message003", content: "message content00222...." },
  { id: 5, title: "Message005", content: "message content00333...." }
];
export default {
  data() {
    return {
      detail: {}
    };
  },
  methods: {
    getDetail() {
      const id = this.$route.params.id;
      this.detail = messageDetails.find(detail => detail.id == id * 1);
    }
  },
  mounted() {
    this.getDetail();
  },
  watch: {
    $route() {
      this.getDetail();
    }
  }
};
</script>
