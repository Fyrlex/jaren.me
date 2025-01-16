<script lang="ts">
  export let data: {
    title: string;
    url: string;
  };
</script>

<title>Jaren Goldberg | {data.title}</title>
<meta charSet="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="Hi, I’m Jaren Goldberg. Check out my website!" />
<link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
<meta property="og:title" content={data.title} />
<meta property="og:description" content="Hi, I’m Jaren Goldberg. Check out my website!" />
<meta property="og:site_name" content="Jaren Goldberg" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://jaren.me/{data.url}" />
<meta property="og:image" content="https://jaren.me/jaren-circle.png" />
<meta content="#06B6D4" data-react-helmet="true" name="theme-color" />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Jaren Goldberg" />
<meta property="twitter:image" content="https://jaren.me/jaren-circle.png" />
<meta property="twitter:description" content="Hi, I’m Jaren Goldberg. Check out my website!" />
