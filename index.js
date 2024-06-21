import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://scjutjfmtifixygfcqln.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjanV0amZtdGlmaXh5Z2ZjcWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4MTk0MjAsImV4cCI6MjAzNDM5NTQyMH0.2Ykbhu1rfYJueuuFVlzKlvwzozAgQwxMxHO_rKkTLKE';
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchData() {
    const { data, error } = await supabase
        .from('Datos')
        .select('*');

    if (error) {
        console.error('Error al obtener datos:', error.message);
        document.getElementById('data').textContent = 'Error al obtener datos';
        return;
    }

    datos=JSON.stringify(data, null, 2);
    document.getElementById('data').textContent = data;

    data.array.forEach(element => {
      console.log(element.nombre)
    });
}

fetchData();


// Importa el cliente de Supabase
/*
import { createClient } from '@supabase/supabase-js'
// URL de tu proyecto en Supabase
const supabaseUrl = 'https://scjutjfmtifixygfcqln.supabase.co'

// Clave de API de tu proyecto en Supabase (puedes encontrarla en la sección de configuración de tu proyecto)
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjanV0amZtdGlmaXh5Z2ZjcWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg4MTk0MjAsImV4cCI6MjAzNDM5NTQyMH0.2Ykbhu1rfYJueuuFVlzKlvwzozAgQwxMxHO_rKkTLKE'
const supabase = createClient(supabaseUrl, supabaseKey)


// Funciones de ejemplo para interactuar con Supabase
async function insertData() {
  const { data, error } = await supabase
    .from('Datos')
    .insert([
      { nombre: 'Tony' }
    ])

  if (error) {
    console.error('Error insertando datos:', error)
  } else {
    console.log('Datos insertados:')
  }
}

async function readData() {
  const { data, error } = await supabase
    .from('Datos')
    .select('*')

  if (error) {
    console.error('Error leyendo datos:', error)
  } else {
    console.log('Datos leídos:', data)
  }
}

async function updateData() {
  const { data, error } = await supabase
    .from('Datos')
    .update({ nombre: 'Joto' })
    .eq('columna2', 'valor2')

  if (error) {
    console.error('Error actualizando datos:', error)
  } else {
    console.log('Datos actualizados:', data)
  }
}

async function deleteData() {
  const { data, error } = await supabase
    .from('Datos')
    .delete()
    .eq('nombre', 'Tony')

  if (error) {
    console.error('Error eliminando datos:', error)
  } else {
    console.log('Datos eliminados:', data)
  }
}

// Ejecutar funciones de ejemplo
insertData()
//updateData()
//deleteData()
readData()

*/