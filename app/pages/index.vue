<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div>
    <h1>Nuxt I18n Starter - {{ t("hello") }}!</h1>
  </div>
</template>
