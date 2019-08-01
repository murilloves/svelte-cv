<script>
	export let name;
	export let address;
	export let email;
	export let phone;
	export let linkedin;
</script>

<div class="div-container">
    <h1>
        {name}
    </h1>
    <div>
        {address}
    </div>
    <div>
        {email} &nbsp; | &nbsp; {phone}
    </div>
    <div>
        <a href="{linkedin.link}" target="blank">
            {linkedin.url}
        </a>
    </div>
</div>

<style>
	.div-container {
		margin-right: 1.5cm;
		margin-bottom: 1.5cm;
		margin-top: -1cm;
		margin-left: 2.5cm;
        text-align: right;
	}

</style>
