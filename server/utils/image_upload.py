import os
from imagekitio import ImageKit
from imagekitio import BadRequestError

from fastapi import File, UploadFile

imagekit = ImageKit(
    private_key=os.environ.get("IMAGEKIT_PRIVATE_KEY")
)

URL_ENDPOINT = os.environ.get("IMAGEKIT_URL_ENDPOINT")

from pathlib import Path


def upload_image(upload_file: UploadFile):

    if upload_file.filename is None:
        raise ValueError("File has no filename")
    
    # Upload from file
    response = imagekit.files.upload(
        file=upload_file.file,
        file_name=upload_file.filename,
        tags=["product", "featured"]
    )
    print(f"File ID: {response.file_id}")
    print(f"URL: {response.url}")

    return response.url