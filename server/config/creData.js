// Thêm dữ liệu mẫu
const creData = {
    development: {
      DATABASE_URL: 'mongodb://localhost:27017/dev_database',
      API_BASE_URL: 'http://localhost:3000/api',
    },
    production: {
      DATABASE_URL: 'mongodb://production_server/database',
      API_BASE_URL: 'https://api.production.com',
    },
  };
  
  // Tạo nội dung JSON từ dữ liệu mẫu
  const jsonString = JSON.stringify(creData, null, 2);
  
  // Ghi vào file data.json
  const fs = require('fs');
  fs.writeFileSync('data.json', jsonString);
  
  console.log('data.json created successfully.');
  