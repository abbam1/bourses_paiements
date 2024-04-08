<template>
  <header id="header" class="header">
    <div class="header-menu">
      <div class="col-sm-7">
        <div class="header-left">
          <h4>
            BOURSES MENA

            <select>
              <option>2022-2023</option>
              <option>2024-2025</option>
              <option>2026-2027</option>
            </select>
            PHASE 1
          </h4>

          <div class="form-inline">
            <form class="search-form">
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Search ..."
                aria-label="Search"
              />
              <button class="search-close" type="submit">
                <i class="fa fa-close"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="col-sm-5">
        <div class="user-area dropdown float-right">
          <a
            href="#"
            class="dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              class="user-avatar rounded-circle"
              src="../images/admin.png"
              alt="User Avatar"
            />
          </a>

          <div class="user-menu dropdown-menu">
            <a class="nav-link" href="#"><i class="fa fa-user"></i> My Profile</a>

            <a class="nav-link" href="#"><i class="fa fa-cog"></i> Settings</a>

            <a class="nav-link" href="#"><i class="fa fa-power-off"></i> Logout</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
