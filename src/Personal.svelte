<script>
	export let name;
	export let address;
	export let email;
	export let phone;
	export let linkedin;
</script>

<div class="personal-container">
    <h1 style="margin: 0">
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

    <style>
        .personal-container {
            margin-bottom: 0.5cm;
            text-align: right;
        }
    
    </style>
    
</div>

