<template>
  <header>
    <img src="@/assets/Logo.png" alt />
    <NavLink text="About Frankie" />
    <UserRole />
  </header>
</template>

<script>
import NavLink from './NavLink';
import UserRole from './UserRole';

export default {
   components: {
    NavLink,
    UserRole
  }
};
</script>

<style>
</style>