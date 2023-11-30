import { NextResponse } from "next/server";
import path from 'path';
import readXlsxFile from 'read-excel-file/node';

export async function GET(request) {
    const filePath = path.join(process.cwd(), 'public', 'datos', 'datos.xlsx');
    const sheetIndex = 2;
    const rows = await readXlsxFile(filePath, { sheet: sheetIndex });
    //console.log(rows);

    // get the first non null row index
    const firstNonNullRowIndex = rows.findIndex(row => row.some(cell => cell !== null && cell !== ''));

    // create an array of objects from each cell, using the following keys: municipio, name, type, rating
    const restaurants = rows.slice(firstNonNullRowIndex + 1).map(row => ({
        municipio: row[1],
        name: row[2],
        type: row[3],
        rating: row[7],
    }));

    return NextResponse.json(restaurants.filter(item => item.name !== 'X' && item.name !== ""));
}