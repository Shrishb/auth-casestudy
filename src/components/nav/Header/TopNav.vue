<template>
  <header>
    <div class="header-left logo-container">
      <a href="/">
      <img src="@/assets/Logo.png" alt="Frankie Logo" />
      </a>
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
  width: 100%;
  .header-right{
    display: flex;
    justify-content: center;
    align-items: center;
    .nav-menu{
      all: unset;
      cursor: pointer;
      padding: 0 2rem;
      font-size: 1em;
      font-weight: 500;
    }
    &:hover{
      text-decoration: underline;
    }
    .user-menu{
      display: flex;
      cursor: pointer;
      &:after{
        content: "\032c";
        height:10px;
        width: 10px;
        color: #ccc;
        font-size: 20px;
        margin-left: 0.5rem;
      }
    }
  }
}
</style>