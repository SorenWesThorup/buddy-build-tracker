# PC Price Tracker API Specification

## Base URL
```
https://dydosyheairmgbxdlnpk.supabase.co/functions/v1/pc-price-api
```

## Authentication
**PUBLIC ACCESS**: No authentication required. All endpoints are publicly accessible.

Headers for requests:
```
Content-Type: application/json
```

## Endpoints

### 1. Add New Price Entry
**POST** `/price-entry`

Add a new price observation for a component.

#### Request Body
```json
{
  "date": "2024-01-15",
  "model": "RTX 4070 Super Gaming X Trio",
  "store": "Proshop",
  "price_dkk": 5299,
  "shipping_dkk": 39,
  "component": "Grafikkort",
  "target_dkk": 5000,
  "url": "https://www.proshop.dk/...",
  "notes": "Special offer"
}
```

#### Response
```json
{
  "id": "uuid",
  "date": "2024-01-15",
  "model": "RTX 4070 Super Gaming X Trio",
  "store": "Proshop",
  "price_dkk": 5299,
  "shipping_dkk": 39,
  "total_dkk": 5338,
  "component": "Grafikkort",
  "target_dkk": 5000,
  "vs_target_dkk": 338,
  "vs_target_percent": 0.0676,
  "url": "https://www.proshop.dk/...",
  "notes": "Special offer",
  "alert": null,
  "created_at": "2024-01-15T10:30:00Z"
}
```

### 2. Get All Components
**GET** `/components`

Retrieve all components with their pricing data.

#### Response
```json
[
  {
    "id": "uuid",
    "date": "2024-01-15",
    "component": "Grafikkort",
    "model": "RTX 4070 Super Gaming X Trio",
    "store": "Proshop",
    "price_dkk": 5299,
    "shipping_dkk": 39,
    "total_dkk": 5338,
    "target_dkk": 5000,
    "vs_target_dkk": 338,
    "vs_target_percent": 0.0676,
    "url": "https://www.proshop.dk/...",
    "notes": "Special offer",
    "alert": null,
    "created_at": "2024-01-15T10:30:00Z"
  }
]
```

### 3. Direct Supabase Access
You can also interact directly with the Supabase database using the JavaScript client:

#### Supabase Configuration
```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dydosyheairmgbxdlnpk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5ZG9zeWhlYWlybWdieGRsbnBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxOTM4NDgsImV4cCI6MjA3Mzc2OTg0OH0.X7MIKy41XnYlQ90o1_1LuLTO54MR4DQJ1WD4-HbDm68';

const supabase = createClient(supabaseUrl, supabaseKey);
```

#### Insert Component Data
```javascript
const { data, error } = await supabase
  .from('components')
  .insert([
    {
      date: '2024-01-15',
      component: 'Grafikkort',
      model: 'RTX 4070 Super Gaming X Trio',
      store: 'Proshop',
      price_dkk: 5299,
      shipping_dkk: 39,
      target_dkk: 5000,
      url: 'https://www.proshop.dk/...',
      notes: 'Special offer'
    }
  ])
  .select();
```

#### Query Component Data
```javascript
const { data, error } = await supabase
  .from('components')
  .select('*')
  .order('created_at', { ascending: false });
```

## ChatGPT Integration Examples

### Daily Price Update Script
```javascript
// Example of how a ChatGPT agent could send daily price updates

const priceData = {
  date: "2024-01-15",
  component: "Grafikkort",
  model: "RTX 4070 Super Gaming X Trio",
  store: "Proshop", 
  price_dkr: 5299,
  shipping_dkk: 39,
  target_dkk: 5000,
  url: "https://www.proshop.dk/grafikkort/...",
  notes: "Normal price"
};

// Using the edge function
const response = await fetch('https://dydosyheairmgbxdlnpk.supabase.co/functions/v1/pc-price-api/price-entry', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(priceData)
});

const result = await response.json();
console.log('Price added:', result);
```

### Using Supabase Directly (Recommended)
```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://dydosyheairmgbxdlnpk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5ZG9zeWhlYWlybWdieGRsbnBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxOTM4NDgsImV4cCI6MjA3Mzc2OTg0OH0.X7MIKy41XnYlQ90o1_1LuLTO54MR4DQJ1WD4-HbDm68'
);

// Add price data
const { data, error } = await supabase
  .from('components')
  .insert([{
    date: '2024-01-15',
    component: 'Grafikkort',
    model: 'RTX 4070 Super Gaming X Trio',
    store: 'Proshop',
    price_dkk: 5299,
    shipping_dkk: 39,
    target_dkk: 5000,
    url: 'https://www.proshop.dk/...',
    notes: 'Special offer'
  }]);

if (error) {
  console.error('Error:', error);
} else {
  console.log('Data inserted:', data);
}
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

## Database Schema

### Components Table Columns
- `id` (UUID, auto-generated)
- `date` (DATE) - Price observation date
- `component` (TEXT) - Component category
- `model` (TEXT) - Specific model name
- `store` (TEXT) - Store name
- `price_dkk` (INTEGER) - Base price in DKK
- `shipping_dkk` (INTEGER) - Shipping cost in DKK (default: 0)
- `total_dkk` (INTEGER) - Calculated total (price + shipping)
- `target_dkk` (INTEGER) - Target price for this component
- `vs_target_dkk` (INTEGER) - Difference from target (calculated)
- `vs_target_percent` (NUMERIC) - Percentage difference from target (calculated)
- `url` (TEXT, optional) - Product URL
- `notes` (TEXT, optional) - Additional notes
- `alert` (TEXT, optional) - Alert message if under target threshold
- `created_at` (TIMESTAMP) - Record creation time
- `updated_at` (TIMESTAMP) - Last update time

## Automatic Calculations
The database automatically calculates:
- `total_dkk` = `price_dkk` + `shipping_dkk`
- `vs_target_dkk` = `total_dkk` - `target_dkk`
- `vs_target_percent` = (`total_dkk` - `target_dkk`) / `target_dkk`
- `alert` = Set if under target by ≥15% or ≥200 DKK

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
No rate limits are enforced. All data is publicly accessible.

## Notes for ChatGPT/AI Agent Integration
1. **No authentication required** - All endpoints are publicly accessible
2. Use the exact store names listed above
3. Prices should be in Danish Kroner (DKK)
4. Date format should be YYYY-MM-DD
5. The `total_dkk`, `vs_target_dkk`, `vs_target_percent`, and `alert` fields are automatically calculated
6. URL should be a direct link to the product page
7. For best performance, use the Supabase JavaScript client directly rather than the edge function
8. All database operations (SELECT, INSERT, UPDATE, DELETE) are allowed without authentication