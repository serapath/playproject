> the first module should also be able to immediately register callbacks for statedb.admin.on(callback), where the callback gets called with { type, data } objects every time an sdb or io object gets created or used by any module or instance and data should include the modulepath and type should describe what kind of usage it is 🙂

- Who defines the type?