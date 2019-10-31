import cloudinary from 'cloudinary';

const storeUpload = (stream, resourceType) => {
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
    });

    return new Promise((resolve, reject) => {
        const buffer = cloudinary.v2.uploader.upload_stream(
            { resourceType: resourceType },
            (error, result) => {
                if (error) reject(error);
                resolve(result);
            }
        );
        stream.pipe(buffer);
    });

}

export {
    storeUpload
}