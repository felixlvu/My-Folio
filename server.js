    import express from 'express';
    import cors from 'cors';
    import { exec, spawn } from 'child_process';
    import url from 'url';
    import { error } from 'console';
    const app = express();

    app.use(cors());

    // Routes

    app.get('/run-bsq', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        const query = parsedUrl.query;

        if (!query.map) {
            res.status(400).send('Paramètre map manquant.');
            return;
        }

        console.log('./BSQ/bsq ./BSQ/map' + query.map);
        if (query.map >= 1 && query.map <= 5) {
            console.log(query.map);
            console.log('./BSQ/bsq ./BSQ/map' + query.map);
            exec('./BSQ/bsq ./BSQ/map' + query.map, (error, stdout, stderr) => {
                console.log(`stderr: ${stderr}`);
                console.log(`stdout: ${stdout}`);
                if (error) {
                    console.error(`Erreur lors de l'exécution du programme : ${error}`);
                    res.status(500).send('Erreur lors de l\'exécution du programme.');
                } else {
                    console.log(`Sortie du programme : ${stdout}`);
                    res.send(stdout);
                }
            });
        }
    });

    app.get('/gen-bsq', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        const query = parsedUrl.query;

        console.log(req.url);
        console.log(query.pattern);
        if (!query.size || query.size < 1) {
            res.status(400).send('Wrong size, try 1 to 10.');
            return;
        }
        if (!query.pattern) {
            res.status(400).send('Wrong pattern, try ".....o..."');
            return;
        }

        console.log(query.size);
        console.log('./BSQ/bsq ' + query.size + ' ' + query.pattern);
        exec('./BSQ/bsq ' + query.size + ' ' + query.pattern, (error, stdout, stderr) => {
            console.log(`stderr: ${stderr}`);
            console.log(`stdout: ${stdout}`);
            if (error) {
                console.error(`Erreur lors de l'exécution du programme : ${error}`);
                res.status(500).send('Erreur lors de l\'exécution du programme.');
            } else {
                console.log(`Sortie du programme : ${stdout}`);
                res.send(stdout);
            }
        }); 
    });

    app.get('/run-42sh', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        const query = parsedUrl.query; 
        const shellCommand = './42sh/42sh';

        if (query.file === 'true') {
            const command = `echo | ${shellCommand} + 'empty'`;
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error('Erreur lors de l\'exécution de la commande :', error);
                } else {
                    console.log('Sortie de la commande :', stdout);
                    res.send(stdout);
                }
            });
            console.log('test');
        } else {    
            const command = `echo ${query.input} | ${shellCommand}`;
            exec(command, (error, stdout, stderr) => {
            console.log(`stderr: ${stderr}`);
            console.log(`stdout: ${stdout}`);
            
            if (error) {
                console.error(`Erreur lors de l'exécution de la commande : ${error}`);
                res.status(500).send('Erreur lors de l\'exécution de la commande.');
            } else {
                console.log(`Sortie de la commande : ${stdout}`);
                res.send(stdout);
            }
            });
        }
        
        console.log('Fin de la requête');
    });

    // Server

    app.listen(3000, () => {
        console.log("Serveur à l'écoute");
    });