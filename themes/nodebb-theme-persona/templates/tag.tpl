<!-- IMPORT partials/breadcrumbs.tpl -->
<div data-widget-area="header">
    {{{each widgets.header}}}
    {{widgets.header.html}}
    {{{end}}}
</div>
<div class="tag">
    <!-- IF displayAddStudents -->
    <div class="add-students">
        <button class="btn btn-primary btn-block" id="add">Add Students</button>
        <div class="modal fade" id="add-students-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">Add Students</h4>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="add-student-names">Student Usernames</label>
                                <input type="text" class="form-control" id="add-student-names" placeholder="Student Usernames" />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" id="add-student-modal-go">Add Students</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ENDIF displayAddStudents -->
    <div class="topic-list-header btn-toolbar">
        <div class="pull-left">
            <!-- IF loggedIn -->
            <!-- IMPORT partials/buttons/newTopic.tpl -->
            <!-- ELSE -->
            <a component="category/post/guest" href="{config.relative_path}/login" class="btn btn-primary">[[category:guest-login-post]]</a>
            <!-- ENDIF loggedIn -->
        </div>

        <div class="btn-group pull-right">
        <!-- IMPORT partials/category/tools.tpl -->
        </div>

        <!-- IMPORT partials/category-filter-right.tpl -->
    </div>

    <!-- IF !topics.length -->
    <div class="alert alert-warning">[[tags:no_tag_topics]]</div>
    <!-- ENDIF !topics.length -->

    <div class="category">
        <!-- IMPORT partials/topics_list.tpl -->
        <button id="load-more-btn" class="btn btn-primary hide">[[unread:load_more]]</button>
        <!-- IF config.usePagination -->
            <!-- IMPORT partials/paginator.tpl -->
        <!-- ENDIF config.usePagination -->
    </div>
</div>
