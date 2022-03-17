// Pages
import Admin from "../views/Admin";
import Home from "../views/Home";
import ListCurrency from "../views/ListCurrency";

const routing = {
  admin: [
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
    },
    {
      path: "/list-currency",
      name: "Listar Moedas",
      component: ListCurrency
    }
  ],
  public: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/home",
      name: "Homepage",
      component: Home,
    },
  ],
};
export default routing;
