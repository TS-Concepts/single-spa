// @ts-ignore
import { useStore } from "@Areadev/util-state";

export default function Root(props) {
  const  store = useStore();
  return (
    <section>
      <h1>Product!!!</h1>
      <button onClick={store.decrement}>Decrement</button>
    </section>
  )
}