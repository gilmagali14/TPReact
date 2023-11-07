function Form({ action }) {
    async function increment(n) {
      return n + 1;
    }
    const [count, incrementFormAction] = useFormState(increment, 0);
    return (
      <form action={action}>
        <button formAction={incrementFormAction}>Count: {count}</button>
        <Button />
      </form>
    );
  }
  
  function Button() {
    const { pending } = useFormStatus();
    return (
      <button disabled={pending} type="submit">
        Submit
      </button>
    );
  }