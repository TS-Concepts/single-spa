// @ts-ignore
import { Navigate } from "@Areadev/util-ui";
// @ts-ignore
import { useStore } from "@Areadev/util-state";

export default function Root(props) {
  const store = useStore()

  return <section>
    <h1>Eu sou o HEADER!</h1>
    <h3>Counter::: {store.counter}</h3>
    <nav>
      <Navigate path="/account">Account</Navigate>
      <Navigate path="/cart">Cart</Navigate>
      <Navigate path="/product">Product</Navigate>
      <Navigate path="/shop">Shop</Navigate>
    </nav>
    </section>;
}