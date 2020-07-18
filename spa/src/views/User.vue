<template>
    <div class="user">
        <h1>{{ user.name }}</h1>
        <div class="info-cont">
            <div class="contact">
                <h2>Contact Info</h2>
                <p>Email: {{ user.email }}</p>
                <p>Phone Number: {{ user.phone }}</p>
                <p>website: {{ user.website }}</p>
            </div>
            <div class="company">
                <h2>Company</h2>
                <h3>{{ company.name }}</h3>
                <p class="catch">{{ company.catchPhrase}}</p>
                <p>{{ fullAddress }}</p>
                <p>{{ address.city }}</p>
                <p>Zipcode: {{ address.zipcode}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "User",
    computed: {
        user () {
            return this.$store.state.users[this.$route.params.id - 1]
        },
        company () {
            return this.user.company
        },
        address () {
            return this.user.address
        },
        fullAddress () {
            return this.address.street + " " + this.address.suite
        }
    },
}
</script>
<style scoped lang="scss">
    .info-cont {
        display: flex;
    }

    .contact, .company {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .catch {
        font-style: italic;
    }

</style>