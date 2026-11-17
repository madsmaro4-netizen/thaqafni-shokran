const SUPABASE_URL = 'https://ugrjbchubvkpqtbwekyw.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_fCcZvS7T45-2c_cDs3vH_Q_32aJG6BP';

const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function testConnection() {
  const { data, error } = await db.from('posts').select('*');
  if (error) {
    console.error('خطأ في الاتصال:', error);
  } else {
    console.log('تم الاتصال بنجاح بـ Supabase! البيانات:', data);
  }
}
testConnection();
