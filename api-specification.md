# PC Price Tracker API Specification

## Base URL
```
https://[your-supabase-project].supabase.co/functions/v1/pc-price-api
```

## Authentication
All requests require a Supabase API key in the header:
```
Authorization: Bearer [your-supabase-anon-key]
apikey: [your-supabase-anon-key]
```

## Endpoints

### 1. Add New Price Entry
**POST** `/price-entry`

Add a new price observation for a component.

#### Request Body
```json
{
  "component_id": "uuid",
  "date": "2024-01-15",
  "model": "RTX 4070 Super Gaming X Trio",
  "store": "Proshop",
  "price_dkk": 5299,
  "shipping_dkk": 39,
  "url": "https://www.proshop.dk/...",
  "notes": "Special offer"
}
```

#### Response
```json
[
  {
    "id": "uuid",
    "component_id": "uuid",
    "date": "2024-01-15",
    "model": "RTX 4070 Super Gaming X Trio",
    "store": "Proshop",
    "price_dkk": 5299,
    "shipping_dkk": 39,
    "total_dkk": 5338,
    "url": "https://www.proshop.dk/...",
    "notes": "Special offer",
    "created_at": "2024-01-15T10:30:00Z"
  }
]
```

### 2. Get All Components with Latest Prices
**GET** `/components`

Retrieve all components with their most recent price entries.

#### Response
```json
[
  {
    "id": "uuid",
    "category": "Grafikkort",
    "name": "RTX 4070 Super",
    "target_price_dkk": 5000,
    "alert_threshold_dkk": 4800,
    "is_alternative": false,
    "created_at": "2024-01-01T00:00:00Z",
    "price_entries": [
      {
        "date": "2024-01-15",
        "model": "RTX 4070 Super Gaming X Trio",
        "store": "Proshop",
        "price_dkk": 5299,
        "shipping_dkk": 39,
        "total_dkk": 5338,
        "url": "https://www.proshop.dk/...",
        "notes": "Special offer"
      }
    ]
  }
]
```

### 3. Add New Component
**POST** `/components`

Add a new component to track.

#### Request Body
```json
{
  "category": "Grafikkort",
  "name": "RTX 4070 Super",
  "target_price_dkk": 5000,
  "alert_threshold_dkk": 4800,
  "is_alternative": false
}
```

### 4. Get Price History
**GET** `/price-history/{component_id}`

Get all price entries for a specific component.

### 5. Get Price Alerts
**GET** `/alerts`

Get components that are currently under their alert threshold.

## Example ChatGPT Agent Usage

### Daily Price Update Script
```javascript
// Example of how a ChatGPT agent could send daily price updates

const priceData = {
  component_id: "your-component-uuid",
  date: "2024-01-15",
  model: "RTX 4070 Super Gaming X Trio",
  store: "Proshop", 
  price_dkk: 5299,
  shipping_dkk: 39,
  url: "https://www.proshop.dk/grafikkort/...",
  notes: "Normal price"
};

const response = await fetch('https://your-project.supabase.co/functions/v1/pc-price-api/price-entry', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your-supabase-anon-key',
    'apikey': 'your-supabase-anon-key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(priceData)
});

const result = await response.json();
console.log('Price added:', result);
```

## Component Categories
- Grafikkort
- Processor  
- Moderkort
- RAM
- SSD
- PSU
- Kabinet
- CPU Køler

## Store Names (Use these exact names)
- Proshop
- Komplett
- Computersalg
- Elgiganten
- Power
- Amazon
- Newegg

## Error Handling
The API returns standard HTTP status codes:
- 200: Success
- 400: Bad Request (missing or invalid data)
- 404: Not Found
- 500: Internal Server Error

Error responses include a JSON object with an error message:
```json
{
  "error": "Component not found"
}
```

## Rate Limiting
No specific rate limits are enforced, but please be reasonable with request frequency.

## Notes for ChatGPT Agent
1. Always include both `Authorization` and `apikey` headers
2. Use the exact store names listed above
3. Prices should be in Danish Kroner (DKK)
4. Date format should be YYYY-MM-DD
5. Always calculate total_dkk as price_dkk + shipping_dkk (this is done automatically by the API)
6. URL should be a direct link to the product page