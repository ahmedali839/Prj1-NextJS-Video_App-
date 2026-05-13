type FetchOption = {
    method?: "GET" || "POST" || "PUT" || "DELETE"
    body? : any
    headers? :Record<string, string>
}

class ApiClient {
    private async fetch<T>(
        endpoint: string,
        options: FetchOption = {}
    ) : Promise<T> {
        const {method="GET", body, headers = {}} = options
    const defaultHeaders = {
        "Content-Type" : "application/json",
        ...headers,
    }
const response = await fetch(`/api/${endpoint}` , {
        method,
        headers: defaultHeaders,
        body: body ? JSON.stringify(body)  : undefined
    })
if(!res.ok) {
throw new Error(await response.text())
}
    return response.json()
    // }
    } 
}