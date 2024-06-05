<script setup>
import { ref } from 'vue';

const nodes = ref()

nodes.value = [
  {
    data: {
      field: 'token_type',
      type: 'string',
      description: 'The type of token, this should always be Bearer.'
    }
  },
  {
    data: {
      field: 'expires_in',
      type: 'number',
      description: 'The number of seconds the token will be valid for.'
    }
  },
  {
    data: {
      field: 'access_token',
      type: 'string',
      description: 'The access token.'
    }
  },
]
</script>

<!--@include: ../../../components/tree-table.md-->