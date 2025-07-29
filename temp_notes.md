> the first module should also be able to immediately register callbacks for statedb.admin.on(callback), where the callback gets called with { type, data } objects every time an sdb or io object gets created or used by any module or instance and data should include the modulepath and type should describe what kind of usage it is 🙂

- Who defines the type?



> In order to develop and use a datashell version on localhost or also load e.g. graph explorer or ui-components or any page that uses STATE with a "work in progress" STATE that is maybe in your fork - that should be possible as well by providing an URL parameter override option ...we can discuss the details 🙂
