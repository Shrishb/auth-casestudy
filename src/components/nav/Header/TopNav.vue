<template>
  <header>
    <div class="header-left logo-container">
      <img src="@/assets/Logo.png" alt />
    </div>
    <div class="header-right">  
      <NavLink class="nav-menu" text="About Frankie" />
      <UserRole class="user-menu" />
    </div>
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

<style lang="scss">
header{
  display: flex;
  justify-content: space-between;
  .header-right{
    display: flex;
    justify-content: center;
    align-items: center;
    .nav-menu{
      all: unset;
      padding: 0 1rem;
      font-size: 1em;
    }
  }
}
</style>