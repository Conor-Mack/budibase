<script>
  import Button, { Label } from "@smui/button";
  export let name;
  export let test;

  const doSomething = () => {
    alert("something");
  };
</script>

<main>

  <Button variant="raised" on:click={doSomething}>
    <Label>Do Bladeebla</Label>
  </Button>

</main>
