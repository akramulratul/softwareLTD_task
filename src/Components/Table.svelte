<script>
    import { countryDataStore } from '../utilities/countryDataStore.js';
    function logCountryData(country) {
    console.log(country.currencies);
  }
  function formatNumber(number) {
        return number.toLocaleString('fr-FR');
    }

  </script>

<div class="">
<table class="table-auto">
    <thead>
      <tr>
        <th >Flag</th>
        <th >Name</th>
        <th >Population</th>
        <th >CIOC</th>
        <th>UN Member Status</th>
        <th >Currencies</th>
        <th>Languages</th>
      </tr>
    </thead>
    <tbody>
      {#each $countryDataStore as country}
      <tr >
        <td><img src={country.flags.png} alt=""></td>
        <td>{country.name.common}</td>
        <td> {formatNumber(country.population)}</td>
        <td >{country.cca2}</td>
        <td> 
          <span 
              class="{country.unMember ? 'bg-green-200 text-green-600' : 'bg-red-200 text-red-600'} py-1 px-3 rounded text-xs">
              {country.unMember ? 'Yes' : 'No'}
          </span>
      </td>
      
        <td>{#if country.currencies}
          {#each Object.keys(country.currencies) as currencyKey, index}
            {currencyKey}{#if index !== Object.keys(country.currencies).length - 1}{", "}{/if}
          {/each}
        {:else}
          N/A
        {/if}</td>
        <td >
          {#if country.languages && Object.values(country.languages).length > 0}
          {Object.values(country.languages)}
        {:else}
          N/A
        {/if}</td>
      </tr>
      {/each}
    </tbody>
  </table>
</div>
<style>

</style>