
import Vue from 'vue'
import Datastore from 'nedb'
import path from 'path'
import { remote } from 'electron'

// Add whatever collections you want to use. In NeDB, each collection gets a file.
var userData = remote.app.getPath('userData');

export default {
  users: new Datastore(
    { filename: path.join(userData, '/users.db'), autoload: true }
  ),
  messages: new Datastore(
    { filename: path.join(userData, '/messages.db'), autoload: true }
  )
}