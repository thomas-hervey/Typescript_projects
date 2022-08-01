// express app controllers
import ExpressServer from './app'

// text processing controllers
import MiscController from '../misc/misc.controller'
import SpacyController from '../spacy/spacy.controller'
import LibpostalController from '../libpostal/libpostal.controller'
import ClavinController from '../clavin/clavin.controller'
import EdinburghGeoparserController from '../edinburghGeoparser/edinburghGeoparser.controller'

// postgress controllers
import PostgresController from '../postgres/postgres.controller'

// mongodb controller
import DbController from '../mongo/db.controller'

export default async function createServer() {
  // TODO: add return type

  // eslint-disable-next-line prettier/prettier
  const server = new ExpressServer([
    // text processing endpoints
    new MiscController(),
    new SpacyController(),
    new LibpostalController(),
    new ClavinController(),
    new EdinburghGeoparserController(),

    // postgres endpoints
    new PostgresController(),

    // mongodb endpoints
    new DbController()
  ])

  return server
}
