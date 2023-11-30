import { NextResponse } from "next/server";
import path from 'path';
import readXlsxFile from 'read-excel-file/node';

export async function GET(request) {
    const filePath = path.join(process.cwd(), 'public', 'datos', 'datos.xlsx');
    const sheetIndex = 1;
    const rows = await readXlsxFile(filePath, { sheet: sheetIndex });
    //console.log(rows);

    // get the first non null row index
    const firstNonNullRowIndex = rows.findIndex(row => row.some(cell => cell !== null && cell !== ''));

    // create an array of objects from each cell, using the following keys: municipio, name, type, rating
    const hotels = rows.slice(firstNonNullRowIndex + 1).map(row => ({
        municipio: row[2],
        name: row[3],
        type: row[4],
        alto: row[5],
        bajo: row[6],
        ota: row[9] === "si" ? true : false,
    }));

    console.log(hotels.filter(item => item.name !== 'X' && item.name !== "" && item.name !== null));

    return NextResponse.json(hotels.filter(item => item.name !== 'X' && item.name !== "" && item.name !== null));
}