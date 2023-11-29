const XLSX = require('xlsx');
const path = require('path');

export async function GET(request){
    console.log("hello");
    const filePath = path.join(__dirname, '../lib/datos.xlsx');
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[1];
    const sheet = workbook.Sheets[sheetName];
    const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    return excelData;
}