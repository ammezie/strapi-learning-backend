module.exports = ({ env }) => ({
    upload: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('CLOUDINARY_NAME', 'samtech'),
            api_key: env('CLOUDINARY_KEY', '939376332888719'),
            api_secret: env('CLOUDINARY_SECRET', 'iLdGvMNgCkt9ui0FGFpXaav6BvU')
        }
    }
})