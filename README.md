# file-size
File Metadata Microservice Project for FreeCodeCamp

## User stories:
1. I can submit a FormData object that includes a file upload.
2. When I submit something, I will receive the file size in bytes within the JSON response.

**Hint:** You may want to use this package: https://www.npmjs.com/package/multer

## Example query usage:

Upload file from the UI at the root.
```text
https://file-size-rv.onrender.com
```

## Example query output:

```text
https://file-size-rv.onrender.com/fileData
```

```json
{
  "File Name": "ring.wav",
  "Size (in bytes)": 129496
}
```
