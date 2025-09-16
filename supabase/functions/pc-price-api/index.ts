import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    const url = new URL(req.url)
    const path = url.pathname.replace('/pc-price-api', '')

    // GET /components - Get all components with latest prices
    if (req.method === 'GET' && path === '/components') {
      const { data: components, error } = await supabaseClient
        .from('pc_components')
        .select(`
          *,
          price_entries!inner(
            date,
            model,
            store,
            price_dkk,
            shipping_dkk,
            total_dkk,
            url,
            notes
          )
        `)
        .order('date', { foreignTable: 'price_entries', ascending: false })

      if (error) throw error

      return new Response(
        JSON.stringify(components),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // POST /price-entry - Add new price entry
    if (req.method === 'POST' && path === '/price-entry') {
      const body = await req.json()
      
      const { data, error } = await supabaseClient
        .from('price_entries')
        .insert([{
          component_id: body.component_id,
          date: body.date,
          model: body.model,
          store: body.store,
          price_dkk: body.price_dkk,
          shipping_dkk: body.shipping_dkk || 0,
          url: body.url,
          notes: body.notes
        }])
        .select()

      if (error) throw error

      return new Response(
        JSON.stringify(data),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // GET /price-history/:component_id - Get price history for a component
    if (req.method === 'GET' && path.startsWith('/price-history/')) {
      const componentId = path.split('/')[2]
      
      const { data, error } = await supabaseClient
        .from('price_entries')
        .select('*')
        .eq('component_id', componentId)
        .order('date', { ascending: false })

      if (error) throw error

      return new Response(
        JSON.stringify(data),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // POST /components - Add new component
    if (req.method === 'POST' && path === '/components') {
      const body = await req.json()
      
      const { data, error } = await supabaseClient
        .from('pc_components')
        .insert([{
          category: body.category,
          name: body.name,
          target_price_dkk: body.target_price_dkk,
          alert_threshold_dkk: body.alert_threshold_dkk,
          is_alternative: body.is_alternative || false
        }])
        .select()

      if (error) throw error

      return new Response(
        JSON.stringify(data),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // GET /alerts - Get components under alert threshold
    if (req.method === 'GET' && path === '/alerts') {
      const { data, error } = await supabaseClient
        .rpc('get_price_alerts')

      if (error) throw error

      return new Response(
        JSON.stringify(data),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({ error: 'Not found' }),
      { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})