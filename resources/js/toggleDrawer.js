function toggleDrawer(){
    let burger = document.getElementById(`burger-menu`);
    let nav = document.getElementById(`nav`);
    burger.classList.toggle(`clicked`);
    nav.classList.toggle(`opened`);
}