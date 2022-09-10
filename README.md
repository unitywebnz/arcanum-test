# Description of this Frontend tech test

This frontend tech test will help us evaluate an applicant's hands-on JS programming skills that cover arrays, objects, functions, handling APIs, JSX, GIT and React Hooks.

### Test file and instructions

```
/src/components/search.js
```

## Available Scripts

### Install the current project's dependencies.

`npm install`

### Runs the app in the development mode.

`npm start`

## Intelligent Search API

Search through content across multiple document formats, including .html, .doc, .ppt, .pdf and text documents stored in a number of systems, including Amazon Simple Storage Service (S3), SharePoint, Salesforce, Google Drive, or OneDrive.

### API Documentation

http://nlp-document-store-dev-130100662.ap-southeast-2.elb.amazonaws.com/api/nlp-document-store/docs/

### API Request Parameters

```
{
  "query": "string"
}
```

### API Response

```
{
  "results": [
    {
      "excerptPage": 0,
      "highlights": [
        {
          "topanswer": true,
          "start": 0,
          "end": 0
        }
      ],
      "documentText": "string",
      "id": "string",
      "documentAttributes": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      },
      "documentUri": "string",
      "document": "string"
    }
  ],
  "numResults": 0,
  "answers": [
    {
      "id": "string",
      "highlights": [
        {
          "topanswer": true,
          "start": 0,
          "end": 0
        }
      ],
      "answer": "string"
    }
  ],
  "facets": {},
  "queryId": "string"
}
```