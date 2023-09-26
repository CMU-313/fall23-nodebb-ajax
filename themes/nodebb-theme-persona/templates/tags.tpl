<!-- IMPORT partials/breadcrumbs.tpl -->
<script> src = "src/topics/tags.js" </script>
<div data-widget-area="header">
    {{{each widgets.header}}}
    {{widgets.header.html}}
    {{{end}}}
</div>
<div class="tags">
    <!-- IF displayCreateButton -->
    <div class="create-tag">
        <button class="btn btn-primary btn-block" id="create">Create Course</button>

        <div class="modal fade" id="create-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">Create Class</h4>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="create-tag-name">Class Name</label>
                                <input type="text" class="form-control" id="create-tag-name" placeholder="Class Name" />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" id="create-modal-go">Create Class</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ENDIF displayCreateButton -->

    <!-- IF displayTagSearch -->
    <!-- IF tags.length -->
    <div class="row">
        <div class="col-lg-12">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="[[global:search]]" id="tag-search">
                <span class="input-group-addon search-button"><i class="fa fa-search"></i></span>
            </div>
        </div>
    </div>
    <!-- ENDIF tags.length -->
    <!-- ENDIF displayTagSearch -->

    <!-- IF !tags.length -->
    <div class="alert alert-warning">[[tags:no_tags]]</div>
    <!-- ENDIF !tags.length -->

    <div class="category row">
        <div class="col-md-12 clearfix tag-list" data-nextstart="{nextStart}">
            <!-- IMPORT partials/tags_list.tpl -->
        </div>
    </div>
</div>