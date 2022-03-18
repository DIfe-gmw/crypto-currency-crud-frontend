// Pages
import Admin from "../views/Admin";
import Home from "../views/Home";
import ListCurrency from "../views/ListCurrency";
import RegisterCurrency from "../views/RegisterCurrency";
import ViewCurrency from "../views/ViewCurrency";

const routing = {
  admin: [
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
    },
    {
      path: "/list-currency",
      name: "ListCurrency",
      component: ListCurrency,
    },
    {
      path: "/register-currency/:id",
      name: "RegisterCurrency",
      component: RegisterCurrency,
    },
    {
      path: "/view-currency/:id",
      name: "ViewCurrency",
      component: ViewCurrency,
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
