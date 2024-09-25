// Vous devez insérer les nouveaux tests ici
import { assert } from 'console';
import 'jest-extended';
import supertest from 'supertest'
import app from '../../../src/app';

const request = supertest(app);

const testJoueur1 = 'Joueur2';
const testJoueur2 = 'Joueur2';

beforeAll(async () => {
  await request.post('/api/v1/jeu/redemarrerJeu').send({ nom: testJoueur1 });
  await request.post('/api/v1/jeu/redemarrerJeu').send({ nom: testJoueur2 });

});

/*describe('redemarrerJeu.test.ts', () => {
  it("should implement test", async () => {
    throw new Error("Ce test n'a pas été défini")
  });
});*/

describe('GET /api/v1/jeu/redemarrerJeu', () => {
  it('Devrait redemarrer le jeu avec succes (HTTP 200)', async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  it('Devrait supprimer tout les joueur lors du redemarrage', async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]); // comment verifier la liste des joueurs est vide
  });
});
