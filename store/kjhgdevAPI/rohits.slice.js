import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_rohit_list = createAsyncThunk(
  "rohits/api_v1_rohit_list",
  async payload => {
    const response = await apiService.api_v1_rohit_list(payload)
    return response.data
  }
)
export const api_v1_rohit_create = createAsyncThunk(
  "rohits/api_v1_rohit_create",
  async payload => {
    const response = await apiService.api_v1_rohit_create(payload)
    return response.data
  }
)
export const api_v1_rohit_retrieve = createAsyncThunk(
  "rohits/api_v1_rohit_retrieve",
  async payload => {
    const response = await apiService.api_v1_rohit_retrieve(payload)
    return response.data
  }
)
export const api_v1_rohit_update = createAsyncThunk(
  "rohits/api_v1_rohit_update",
  async payload => {
    const response = await apiService.api_v1_rohit_update(payload)
    return response.data
  }
)
export const api_v1_rohit_partial_update = createAsyncThunk(
  "rohits/api_v1_rohit_partial_update",
  async payload => {
    const response = await apiService.api_v1_rohit_partial_update(payload)
    return response.data
  }
)
export const api_v1_rohit_destroy = createAsyncThunk(
  "rohits/api_v1_rohit_destroy",
  async payload => {
    const response = await apiService.api_v1_rohit_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const rohitsSlice = createSlice({
  name: "rohits",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_rohit_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_rohit_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rohit_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rohit_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_rohit_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rohit_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rohit_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_rohit_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rohit_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rohit_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_rohit_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rohit_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rohit_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_rohit_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rohit_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rohit_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_rohit_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rohit_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_rohit_list,
  api_v1_rohit_create,
  api_v1_rohit_retrieve,
  api_v1_rohit_update,
  api_v1_rohit_partial_update,
  api_v1_rohit_destroy,
  slice: rohitsSlice
}
