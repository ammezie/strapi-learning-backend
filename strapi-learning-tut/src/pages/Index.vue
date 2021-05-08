<template>
    <Layout>
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <section class="hero-section">
            <h1>Welcome!</h1>

            <p>
                Strapi is the leading open-source headless CMS. It’s 100%
                Javascript, fully customizable and developer-first.
            </p>

            <p>
                <g-link to="/login"> Login </g-link> to enjoy all our courses
                here
            </p>
        </section>
    </Layout>
</template>

<style>
.home-links a {
    margin-right: 1rem;
}

.hero-section {
    background: #fff;
    color: #2f2e8b;
    padding: 1rem;
}
</style>
