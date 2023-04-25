const conexion = require('../../../../config/conexion')

exports.getAllQuotes = (req, res)=>{
    const sql = `SELECT quote.date, quote.hour, quote.id, quote.doctor, pets.name 
    FROM quote 
    JOIN pets ON quote.id_pet = pets.id`
    conexion.query(sql, (error, rows)=>{
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}

exports.getById = (req, res)=>{
    const {id} = req.params;
    const sql = `SELECT * FROM quote WHERE id = ${id}`
    conexion.query(sql, (error, rows)=>{
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}

exports.createQuote = (req, res)=>{
    const {date, hour, doctor, id_pet} = req.body;

    const sql = `INSERT INTO quote (date, hour, doctor, id_pet) VALUES ('${date}', '${hour}', '${doctor}', '${id_pet}')`
    conexion.query(sql, (error, rows)=>{
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}

exports.updateQuotes = (req, res)=>{
    const {id, date, hour, doctor, id_pet} = req.body;

    const sql = `UPDATE quote SET date = '${date}', hour='${hour}', doctor='${doctor}', id_pet='${id_pet}' WHERE id = '${id}'`
    conexion.query(sql, (error, rows)=>{
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}

exports.deleteQuotes = (req, res)=>{
    const {id} = req.params;

    const sql = `DELETE FROM quote WHERE id = '${id}'`
    conexion.query(sql, (error, rows)=>{
        if (error) {
            res.json(error)
        } else {
            res.json("QUOTE_DELETED_SUCCESSFULY")
        }
    })
}