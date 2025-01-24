<script>
export default {
  name: 'SidebarComponent',
};
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h4>Delicias Mariella</h4>
    </div>
    <ul class="sidebar-links">
      <h6>
        <span>Menú principal</span>
        <div class="separator-menu"></div>
      </h6>
      <li>
        <router-link to="/" class="router-link">
          <span class="bi bi-house-door"></span>
          <span class="link-text">Dashboard</span>
        </router-link>
      </li>
      <h6>
        <span>Tablas</span>
        <div class="separator-menu"></div>
      </h6>
      <li>
        <router-link to="/productos" class="router-link">
          <span class="bi bi-box"></span>
          <span class="link-text">Productos</span>
        </router-link>
      </li>
      <li>
        <router-link to="/presupuestos" class="router-link">
          <span class="bi bi-currency-dollar"></span>
          <span class="link-text">Presupuestos</span>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="router-link">
          <span class="bi bi-book"></span>
          <span class="link-text">Recetas</span>
        </router-link>
      </li>
      <h6>
        <span>Cuenta</span>
        <div class="separator-menu"></div>
      </h6>
      <li>
        <router-link to="/" class="router-link">
          <span class="bi bi-person-circle"></span>
          <span class="link-text">Perfil</span>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="router-link">
          <span class="bi bi-gear"></span>
          <span class="link-text">Configuración</span>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="router-link">
          <span class="bi bi-tools"></span>
          <span class="link-text">Panel</span>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="router-link">
          <span class="bi bi-box-arrow-left">
          </span><span class="link-text">Salir</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
/* Estilo base del sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 55px;
  background: #ffff;
  padding: 25px 10px;
  overflow: hidden;
  transition: all 0.4s ease;
  white-space: nowrap;
  z-index: 1;
  border-radius: 0px 10px 10px 0;
  box-shadow: 5px 5px 10px #48529944;
}

/* Efecto hover para expandir */
.sidebar:hover {
  width: 250px;
}

/* Header del sidebar */
.sidebar-header h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #000000;
  margin-left: 10px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.sidebar:hover .sidebar-header h4 {
  opacity: 1;
}

/* Separador */
.sidebar-links .separator-menu {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
  transform: scaleX(1);
  transform: translateY(-50%);
  background: #000000;
  transform-origin: right;
  transition-delay: 0.2s;
}

.sidebar:hover .sidebar-links .separator-menu {
  transition-delay: 0s;
  transform: scaleX(0);
}

/* Links y textos */
.sidebar-links {
  list-style: none;
  margin-top: 20px;
  padding-left: 0;
}

.sidebar-links h6 {
  color: #000000;
  font-weight: 500;
  margin: 10px 0;
  white-space: nowrap;
  font-size: 0.85rem;
  position: relative;
  transition: opacity 0.4s ease;
}

.sidebar-links h6 span {

  opacity: 0;
}

.sidebar:hover .sidebar-links h6 span {
  opacity: 1;
}

/* Enlaces */
.sidebar-links li .router-link {
  display: flex;
  align-items: center;
  gap: 0 10px;
  color: #000000e3;
  font-weight: 500;
  padding: 15px 10px;
  text-decoration: none;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.sidebar-links li a:hover {
  background: #3636362d;
  color: #000000;
  border-radius: 4px;
}

/* Texto de los enlaces */
.sidebar-links li .link-text {
  margin-left: 15px;
  opacity: 0;
  transition: opacity 0.4s ease, margin-left 0.4s ease;
}

.sidebar:hover .sidebar-links li .link-text {
  opacity: 1;
  margin-left: 20px;
}
</style>
