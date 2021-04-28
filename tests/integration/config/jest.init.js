import Vue from 'vue'
import fetchMock from 'jest-fetch-mock'
import ODS from 'owncloud-design-system'
import { config } from '@vue/test-utils'
import { listResources } from '../../helpers/mocks'
fetchMock.enableMocks()

Vue.use(ODS)

config.mocks = {
  $client: {
    files: {
      list: listResources
    }
  },
  $gettext: str => str,
  $language: {
    current: 'en_US'
  }
}
