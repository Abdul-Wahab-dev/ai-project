import { s3Client } from "@/config/aws";
import {
  PutObjectCommand,
  DeleteObjectCommand,
  ListObjectsCommand,
} from "@aws-sdk/client-s3";
class S3Client {
  async uploadToS3(files: File[] | File) {
    if (Array.isArray(files)) {
      const images: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const imageKey = `temp/images/${files[i].name}`;
        images.push(imageKey);
        const fileBuffer = await files[i].arrayBuffer();

        const command = new PutObjectCommand({
          Bucket: "image-to-pdf-images",
          Body: fileBuffer,
          Key: imageKey,
          ContentType: files[i].type,
        });
        await s3Client.send(command);
      }
      return images;
    } else {
      const image: string = "";

      const imageKey = `temp/${files.name}`;

      const fileBuffer = await files.arrayBuffer();

      const command = new PutObjectCommand({
        Bucket: "image-to-pdf-images",
        Body: fileBuffer,
        Key: imageKey,
        ContentType: files.type,
      });
      await s3Client.send(command);

      return image;
    }
  }

  async uploadBufferToS3(fileBuffer: Buffer) {
    const image: string = "";

    const objectKey = `temp/pdf/${Date.now()}.pdf`;

    const command = new PutObjectCommand({
      Bucket: "image-to-pdf-images",
      Body: fileBuffer,
      Key: objectKey,
      ContentType: "application/pdf",
    });
    await s3Client.send(command);

    return objectKey;
  }

  async deleteObjects(keys: string[] | string) {
    if (Array.isArray(keys)) {
      if (!keys.length) return;
      for (let i = 0; i < keys.length; i++) {
        const command = new DeleteObjectCommand({
          Bucket: process.env.AWS_BUCKET_IMAGE_PDF,
          Key: keys[i],
        });
        await s3Client.send(command);
      }
    } else {
      const command = new DeleteObjectCommand({
        Bucket: process.env.AWS_BUCKET_IMAGE_PDF,
        Key: keys,
      });
      await s3Client.send(command);
    }
  }

  async deleteAllTempObj() {
    const command = new ListObjectsCommand({
      Bucket: process.env.AWS_BUCKET_IMAGE_PDF,
      Prefix: "temp/",
    });

    const objectList = await s3Client.send(command);

    const keys: string[] = [];
    if (objectList.Contents && objectList.Contents.length) {
      objectList.Contents.forEach((el) => keys.push(el.Key as string));
      await this.deleteObjects(keys);
    }
  }
}

export const s3FileHandling = new S3Client();
