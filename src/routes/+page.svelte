<script>
    let { data } = $props();
</script>

<h1>Estos son los datos</h1>

<pre>
    {JSON.stringify(data,null,2)}
</pre>